FactoryBot.define do
  factory :store do
    # Use sequence to make sure that the value is unique
    sequence(:name) { |n| "user-#{n}" }
  end

  factory :product do
    sequence(:name) { |n| "item-#{n}" }
    user
  end
end