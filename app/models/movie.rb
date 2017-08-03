class Movie < ActiveRecord::Base
  belongs_to :user
  has_many :reviews
  has_attached_file :image
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

  def self.search(search)
    where("title LIKE ? OR description LIKE ? OR director LIKE ?", "%#{search}%", "%#{search}%", "%#{search}%")
  end
end
