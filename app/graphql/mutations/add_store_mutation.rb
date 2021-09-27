module Mutations
  class AddStoreMutation < Mutations::BaseMutation
    argument :name, String, required: true
    argument :address, String, required: false

    field :store, Types::StoreType, null: true
    field :errors, [String], null: false

    def resolve(name:, address: nil)
      store = Store.new(
        name: name,
        address: address,
      )

      if store.save
        { store: store }
      else
        { errors: store.errors.full_messages }
      end
    end
  end
end
