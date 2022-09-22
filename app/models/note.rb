class Note < ApplicationRecord
    has_many :taggings, dependent: :destroy
    has_many :tags, -> {distinct}, through: :taggings
end
