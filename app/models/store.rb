class Store < ApplicationRecord
  has_many   :stock_items, dependent: :delete_all
  has_many   :products, through: :stock_items
end
