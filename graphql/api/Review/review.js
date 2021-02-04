import { CURRENT_TIME } from "../../../utils/commonUtils";
import Review from "../../models/Review";

export default {
  Query: {
    getAllReview: async (_, args) => {
      try {
        const result = await Review.find().sort({ sort: 1 });

        return result;
      } catch (e) {
        console.log(e);
        return [];
      }
    },
  },

  Mutation: {
    changeSortReview: async (_, args) => {
      const { id, sort } = args;

      try {
        const result = await Review.updateOne(
          { _id: id },
          {
            $set: {
              sort,
            },
          }
        );

        return true;
      } catch (e) {
        console.log(e);
        return false;
      }
    },

    createReview: async (_, args) => {
      const { title, content, thumbnailPath, sort } = args;

      try {
        const current = await CURRENT_TIME();

        const result = await Review.create({
          title,
          content,
          thumbnailPath,
          sort,
          createdAt: current,
        });

        return true;
      } catch (e) {
        console.log(e);
        return false;
      }
    },

    modifyReview: async (_, args) => {
      const { id, title, content, thumbnailPath } = args;

      try {
        const result = await Review.updateOne(
          { _id: id },
          {
            $set: {
              title,
              content,
              thumbnailPath,
            },
          }
        );

        return true;
      } catch (e) {
        console.log(e);
        return false;
      }
    },

    deleteReview: async (_, args) => {
      const { id } = args;

      try {
        const result = await Review.deleteOne({ _id: id });

        return true;
      } catch (e) {
        console.log(e);
        return false;
      }
    },
  },
};
