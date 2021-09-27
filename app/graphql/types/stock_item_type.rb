module Types
  class StockItemType < Types::BaseObject
    field :id, ID, null: false
    field :store_id, Integer, null: true
    field :product_id, Integer, null: true
    field :stock, Integer, null: true
  end
end
