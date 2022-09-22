class Tag < ApplicationRecord
    has_many :taggings, dependent: :destroy
    has_many :notes, -> { distinct }, through: :taggings
end
