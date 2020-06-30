class UserSerializer < ActiveModel::Serializer
    attributes :email, :password, :id
end