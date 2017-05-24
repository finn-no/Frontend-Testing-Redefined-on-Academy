describe("TodoMVC", function () {

  var TODO_ITEM_ONE = "buy some cheese";
  var TODO_ITEM_TWO = "feed the cat";
  var TODO_ITEM_THREE = "book a doctors appointment";

  beforeEach(function () {
      cy.viewport(700, 650)
  });

  context("End-2-End Testing", function () {

    beforeEach(function () {
      cy.request("DELETE", "http://localhost:8888")
        .visit("/")
    });

    context("No Todos", function () {

      it("should hide #main and #footer", function () {
        cy
          .get("#todo-list li").should("not.exist")
          .get(".main").should("not.exist")
          .get(".footer").should("not.exist")
      })
    });

    context("New Todo", function () {

      it("should allow me to add todo items", function () {
        cy
          .get("#new-todo").type(TODO_ITEM_ONE).type("{enter}")
          .get("#todo-list li").eq(0).find("label").should("contain", TODO_ITEM_ONE)
          .get("#new-todo").type(TODO_ITEM_TWO).type("{enter}")
          .get("#todo-list li").eq(1).find("label").should("contain", TODO_ITEM_TWO)
      });

      it("should clear text input field when an item is added", function(){
        cy
          .get("#new-todo")
            .type(TODO_ITEM_ONE)
            .type("{enter}")
            .should("have.value", "")
      });

      it("should append new items to the bottom of the list", function () {
        cy
          .createDefaultTodos().as("todos")

          .get("#todo-count").contains("3 items left")

          .get("@todos").eq(0).find("label").should("contain", TODO_ITEM_ONE)
          .get("@todos").eq(1).find("label").should("contain", TODO_ITEM_TWO)
          .get("@todos").eq(2).find("label").should("contain", TODO_ITEM_THREE)
      });
    });

    context("Mark all as completed", function () {

      beforeEach(function () {
        cy.createDefaultTodos().as("todos")
      });

      it("should allow me to mark all items as completed", function () {
        cy
          .get("#toggle-all").check()

          .get("@todos").eq(0).should("have.class", "completed")
          .get("@todos").eq(1).should("have.class", "completed")
          .get("@todos").eq(2).should("have.class", "completed")
      });

      it("complete all checkbox should update state when items are completed / cleared", function () {
        cy
          .get("#toggle-all").as("toggleAll")
            .check()
            .should("be.checked")

          .get("#todo-list li").eq(0).as("firstTodo")
            .find(".toggle")
            .uncheck()

          .get("@toggleAll").should("not.be.checked")
          .get("@firstTodo").find(".toggle").check()
          .get("@toggleAll").should("be.checked")
      })
    });
  });

/*
  context("Component Testing", function () {
    beforeEach(function () {
      cy
        .server({force404: true})
        .route("GET", "/", "fixture:todos.json").as("todoList")
        .route("POST", "/", {}).as("newTodo")
        .visit("/")
          .wait("@todoList")
            .its("url").should("include", "/")
    });

    it("Should start with 2 todo items", function () {
      cy
        .get("#todo-list li")
          .should("have.length", 2)
    });

    it("Add one more todo item", function () {
      cy
        .get("#new-todo").type(TODO_ITEM_THREE).type("{enter}")
        .wait("@newTodo")
          .its("requestBody")
          .should("deep.eq", {
            title: TODO_ITEM_THREE,
            order: 3,
            completed: false
          })

        .get("#todo-list li").eq(2).find("label").should("contain", TODO_ITEM_THREE)
    });
  });
  */
});
