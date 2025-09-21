import { Mongoose } from "mongoose";

const cvSchema = new Mongoose.Schema({
    userId: { type: Mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    title: { type: String, required: true },
    thumbnailLink: {
        type: String,
    },
    template: {
        theme: String,
        colorPalette: [String],
    },
    profileInfo: {
        profilePreviewUrl: String,
        fullName: String,
        designation: String,
        summary: String,
    },
    contactInfo: {
        email: String,
        phone: String,
        location: String,
        linkedIn: String,
        github: String,
        website: String,
    },
    workExperience: [
        {
            company: String,
            role: String,
            startDate: String,
            endDate: String,
            description: String,
        },
    ],
    education: [
        {
            degree: String,
            institution: String,
            startDate: String,
            endDate: String,
        }
    ],
    skills: [
        {
            name: String,
            progress: Number,
        }
    ],
    projects: [
        {
            title: String,
            description: String,
            github: String,
            liveDemo: String,
        }
    ],
    certifications: [
        {
            title: String,
            issuer: String,
            year: String,
            
        }
    ],
    languages: [
        {
            name: String,
            progress: Number,

        },
    ],
    interests: [String],
}, {
    timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' },
})

const Cv = Mongoose.model('Cv', cvSchema);

export default Cv;