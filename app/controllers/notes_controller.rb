class NotesController < ApplicationController

    def index
        notes = Note.all
        render json: notes
    end

    def show
        note = Note.find(params[:id]).as_json(include: :tags)
        render json: note
    end

    def create
        note = Note.create(note_params)
        create_or_delete_notes_tags(note, params[:tags][:note])

        if note.valid?
            render json: note
        else
            render json: note.errors, status: 422
        end
    end
    
    def update
        create_or_delete_notes_tags(note, params[:tags][:note])

        note = Note.find(params[:id])
        note.update(note_params)

        if note.valid?
            render json: note
        else
            render json: note.errors, status: 422
        end
    end

    def destroy
        note = Note.find(params[:id])
        note.destroy
        render json: note
    end

    private

    def create_or_delete_notes_tags(note, tags)
        post.taggings.destroy_all
        tags = tags.strip.split(',')
        tags.each do |tag|
            post.tags << Tag.find_or_create_by(name: tag)
        end
    end


    def note_params
        params.require(:note).permit(:title, :body, :tags)
    end
end
