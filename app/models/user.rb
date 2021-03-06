# == Schema Information
#
# Table name: users
#
#  id                 :integer          not null, primary key
#  username           :string           not null
#  password_digest    :string           not null
#  session_token      :string           not null
#  email              :string           not null
#  location           :string
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#  image_file_name    :string
#  image_content_type :string
#  image_file_size    :integer
#  image_updated_at   :datetime
#

class User < ApplicationRecord

  has_attached_file :image, default_url: "colorwheel.png"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\z/

  attr_reader :password

  validates :username, :password_digest, :session_token, presence: true
  validates :username, uniqueness: true
  validates :email, uniqueness: true, length: {minimum: 5}
  validates :password, length: { minimum: 6 }, allow_nil: true

  has_many :projects,
  foreign_key: :creator_id

  has_many :backings,
  foreign_key: :user_id

  has_many :rewards,
  through: :backings

  has_many :backed_projects,
  through: :rewards,
  source: :project

  after_initialize :ensure_session_token

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    return nil unless user
    user.is_password?(password) ? user : nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    generate_unique_session_token
    save!
    self.session_token
  end

  private

  def ensure_session_token
    generate_unique_session_token unless self.session_token
  end

  def new_session_token
    SecureRandom.urlsafe_base64
  end

  def generate_unique_session_token
    self.session_token = new_session_token
    while User.find_by(session_token: self.session_token)
      self.session_token = new_session_token
    end
    self.session_token
  end

end
