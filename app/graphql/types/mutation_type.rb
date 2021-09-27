module Types
  class MutationType < Types::BaseObject
    # TODO: remove me
    field :add_product, mutation: Mutations::AddProductMutation
    field :update_product, mutation: Mutations::UpdateProductMutation
    field :delete_product, mutation: Mutations::DeleteProductMutation
    field :add_store, mutation: Mutations::AddStoreMutation
    field :update_store, mutation: Mutations::UpdateStoreMutation
    field :delete_store, mutation: Mutations::DeleteStoreMutation
    field :add_product_store, mutation: Mutations::AddProductStoreMutation

    field :test_field, String, null: false,
      description: "An example field added by the generator"
    def test_field
      "Hello World"
    end
  end
end
