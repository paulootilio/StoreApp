module Mutations
  class DeleteProductMutation < Mutations::BaseMutation
    argument :id, ID, required: true

    field :product, Types::ProductType, null: true
    field :errors, [String], null: false

    def resolve(id:)
      product = Product.find(id)

      if product.destroy
        { product: product }
      else
        { errors: product.errors.full_messages }
      end
    end
  end
end