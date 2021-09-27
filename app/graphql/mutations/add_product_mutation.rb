module Mutations
  class AddProductMutation < Mutations::BaseMutation
    argument :name, String, required: true
    argument :description, String, required: false
    argument :price, Float, required: false

    field :product, Types::ProductType, null: true
    field :errors, [String], null: false

    def resolve(name:, description: nil, price: nil)
      product = Product.new(
        name: name,
        description: description,
        price: price
      )

      if product.save
        { product: product }
      else
        { errors: product.errors.full_messages }
      end
    end
  end
end
