module Mutations
  class UpdateProductMutation < Mutations::BaseMutation
    argument :id, ID, required: true
    argument :name, String, required: true
    argument :description, String, required: false
    argument :price, Float, required: false

    field :product, Types::ProductType, null: true
    field :errors, [String], null: false

    def resolve(id:, name:, description: nil, price: nil)
      product = Product.find(id)

      if product.update(name: name, description: description, price: price )
        { product: product }
      else
        { errors: product.errors.full_messages }
      end
    end
  end
end