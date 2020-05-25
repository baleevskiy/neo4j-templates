import neo from "../Builder";

it("should return proper queries", () => {
  const neoQuery = neo`
  MATCH (v:Venue)-[r:HAS_SLOT]->(s:Slot)
  ${"WHERE"}
  `;

  expect(
    neoQuery({
      venue: { name__eq: "Test" },
      slot: { name__contains: "slotName" },
    })
  ).toEqual([
    `
    MATCH (v:Venue)-[r:HAS_SLOT]->(s:Slot)
    WHERE v.name = $venue.name AND s.name CONTAINS $slot.name
    `,
    {
      venue: { name: "Test" },
      slot: { name: "slotName" },
    },
  ]);
});
