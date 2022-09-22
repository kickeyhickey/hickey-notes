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
        pp params[:tags]
        pp note_params
        note = Note.create(note_params)
        note.tags << Tag.find_or_create_by(name: params[:tags])
        note.save!
        pp note
        # create_or_delete_notes_tags(note, params[:tags])

        if note.valid?
            render json: note
        else
            render json: note.errors, status: 422
        end
    end
    
    def update
        create_or_delete_notes_tags(note, params[:note][:tags])

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
        note.taggings.destroy_all
        # tags = tags.strip.split(',')
        tags.each do |tag|
            note.tags << Tag.find_or_create_by(name: tag)
        end
    end


    def note_params
        params.require(:note).permit(:title, :body, :tags, :id, :tag_id, :note)
    end
end
