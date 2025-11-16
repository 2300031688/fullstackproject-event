//const BASE_URL = "http://localhost:2020/api/events"; //without .env
const BASE_URL = import.meta.env.VITE_API_BASE_URL
// Get all events
export async function getEvents() {
  const res = await fetch(BASE_URL);
  return res.json();
}

// Create a new event
export async function addEvent(event) {
  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(event),
  });
  return res.json();
}

// Update event
export async function updateEvent(id, event) {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(event),
  });
  return res.json();
}

// Delete event
export async function deleteEvent(id) {
  await fetch(`${BASE_URL}/${id}`, { method: "DELETE" });
}
