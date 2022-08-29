class TagsController < ApplicationController

    def index
        tags = Tag.all
        render json: tags
    end

    def show
        tag = Tag.find(params[:id])
        render json: tag
    end

    def create
        tag = tag.create(tag_params)

        if tag.valid?
            render json: tag
        else
            render json: tag.errors, status: 422
        end
    end

private
    def tag_params 
        params.require(:tag).permit(:name)
    end

end
