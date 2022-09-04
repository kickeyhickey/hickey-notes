class TagsController < ApplicationController

    def index
        tags = Tag.all
        render json: tags
    end

    def show
        tag = Tag.find(params[:id]).as_json(include: :notes)
        render json: tag
    end

    def create
        note = Note.find(params[:note_id])
        tag = note.tags.create(tag_params)

        if tag.valid?
            render json: tag
        else
            render json: tag.errors, status: 422
        end
    end

    def destroy
        tag = Tag.find(params[:id])
        tag.destroy
        render json: tag
    end

private
    def tag_params 
        params.require(:tag).permit(:name )
    end
end
