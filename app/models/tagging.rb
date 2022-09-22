class Tagging < ApplicationRecord
  belongs_to :note
  belongs_to :tag

  validates :note_id, uniqueness: { scope: :tag_id}
  validates_uniqueness_of :tag_id, :scope => :note_id
end
