module Types
  class StoreType < Types::BaseObject
    field :id, ID, null: false
    field :name, String, null: true
    field :address, String, null: true
  end
end
