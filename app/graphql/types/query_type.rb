module Types
  class QueryType < Types::BaseObject
    field :products,
          [Types::ProductType],
          null: false,
          description: "Returns a list of products"
    field :stores,
          [Types::StoreType],
          null: false,
          description: "Returns a list of stores"

    def products
      Product.all
    end
    def stores
      Store.all
    end
  end
end