module Mutations
  class DeleteStoreMutation < Mutations::BaseMutation
    argument :id, ID, required: true

    field :store, Types::StoreType, null: true
    field :errors, [String], null: false

    def resolve(id:)
      store = Store.find(id)

      if store.destroy
        { store: store }
      else
        { errors: store.errors.full_messages }
      end
    end
  end
end