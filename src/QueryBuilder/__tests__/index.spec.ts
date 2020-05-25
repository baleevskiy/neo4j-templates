it("should create label queries", () => {
  expect(render(L("Organisation"))).toEqual("(o:Organisation)");
  expect();

  neo
    .createRelation("HAS_ORDER", { params })
    .from("Organisation")
    .to("Order")
    .between("Organisation", "Order")
    .where({
      organisation: {
        name: "test",
      },
      order: {},
    });

  neo
    .addRelation("HAS_ORDER")
    .removeRelation("HAS_ORDER")
    .between(
      N("Organisation", { id: "test-id" }),
      N("Order", { id: "order-id" })
    )
    .from(N("Organisation", { id: "test-id" }))
    .to(N("Order", { id: "order-id" }));

  neo
    .find(
      N("Organisation", { name: "test" }).relatedTo(
        N("Order").relatedTo("Transaction", {}).relatedFrom("User")
      )
    )
    .mapBy("id");

  neo
    .find(O("Organisation", { name__contains: "test" }).mappedBy("p.id"))
    .where();

  neo
    .match([
      OrgNode.relatedTo(OrderNode).through("HAS_ORDER", { data }),
      OtherNode.relatedTo(OrgNode).through("HAS_OTHER", { data }),
      OrgNode.relatedTo(OtherNode).through("HAS_OTHER_NODE", { data }),
    ])
    .update(OrgNode, data)
    .update(OtherNode, dataForOtherNode);
});
