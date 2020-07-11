class Bike < ApplicationRecord
    validates :brand, presence: true, on: :create
    validates :size, presence: true, on: :update
end
