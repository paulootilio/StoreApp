module Mutations
  class AddProductStoreMutation < Mutations::BaseMutation
    argument :id, ID, required: true
    argument :name, String, required: true
    argument :address, String, required: false

    field :store, Types::StoreType, null: true
    field :errors, [String], null: false

    def resolve(id:, name:, address: nil)
      store = Store.find(id)

      if store.update(name: name, address: address)
        { store: store }
      else
        { errors: store.errors.full_messages }
      end
    end
  end
end