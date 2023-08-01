async function getData() {
  const res = await fetch("http://localhost:3000/api");
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function TestData() {
  const data = await getData();
  console.log("data:", data);

  return (
    <div>
      <h2>TestData Component</h2>
      <p>{JSON.stringify(data)}</p>
    </div>
  );
}
