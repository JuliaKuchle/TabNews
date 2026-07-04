import useSWR from "swr";

async function fetchAPI(key) {
  const response = await fetch(key);
  const responseBody = await response.json();
  return responseBody;
}

export default function statusPage() {
  return (
    <>
      <h1>Status</h1>
      <UpdatedAt />
    </>
  );
}

function UpdatedAt() {
  const { isLoading, data } = useSWR("/api/v1/status", fetchAPI, {
    refreshInterval: 2000,
  });

  if (isLoading || !data) {
    return <p>Carregando...</p>;
  }

  const updatedAtText = new Date(data.updated_at).toLocaleString("pt-BR");
  const version = data.dependencies.database.version;
  const max_connections = data.dependencies.database.max_connections;
  const opened_connections = data.dependencies.database.opened_connections;

  return (
    <div>
      <p>Última atualização: {updatedAtText}</p>
      <p>Version: {version}</p>
      <p>Max Connections: {max_connections}</p>
      <p>Opened Connections: {opened_connections}</p>
    </div>
  );
}
