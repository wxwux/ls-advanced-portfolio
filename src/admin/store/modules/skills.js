export default {
  namespaced: true,
  state: {
    skills: [],
    categories: []
  },
  mutations: {
    SET_SKILLS_CATEGORIES: (state, skills) => (state.categories = skills),
    ADD_SKILLS_CATEGORY: (state, skillCategory) => {
      state.categories.unshift(skillCategory);
    },
    UPDATE_SKILLS_CATEGORY: (state, changedCategory) => {
      state.categories = state.categories.map(category => {
        return category.id === changedCategory.id ? changedCategory : category;
      });
    },
    REMOVE_SKILLS_CATEGORY: (state, removedCategoryId) => {
      state.categories = state.categories.filter(
        category => category.id !== removedCategoryId
      );
    },
    SET_SKILLS_STATE: (state, skills) => (state.skills = skills),
    ADD_NEW_SKILL: (state, skill) => state.skills.push(skill),
    REMOVE_SKILL: (state, removedSkillId) => {
      state.skills = state.skills.filter(skill => skill.id !== removedSkillId);
    }
  },
  actions: {
    async storeSkillsGroup({ commit }, categoryName) {
      try {
        const response = await this.$axios.post("/categories", categoryName);

        commit("ADD_SKILLS_CATEGORY", response.data);
        return response;
      } catch (error) {
        throw new Error(error.response.data.error);
      }
    },
    async updateSkillsGroup({ commit }, payload) {
      try {
        const response = await this.$axios.post(
          `/categories/${payload.id}`,
          payload
        );

        commit("UPDATE_SKILLS_CATEGORY", response.data.category);

        return response;
      } catch (error) {
        throw new Error(error.response.data.message);
      }
    },
    async removeSkillsGroup({ commit }, categoryId) {
      try {
        const response = await this.$axios.delete(`/categories/${categoryId}`);
        commit("REMOVE_SKILLS_CATEGORY", categoryId);
        return response;
      } catch (error) {
        throw new Error(error.response.data.message);
      }
    },
    async fetchCategories({ commit }) {
      try {
        const response = await this.$axios.get("/categories");
        commit("SET_SKILLS_CATEGORIES", response.data);
        return response;
      } catch (error) {
        throw new Error(error.response.data.error);
      }
    },
    async fetchSkills({ commit }) {
      try {
        const response = await this.$axios.get("/skills/1");
        commit("SET_SKILLS_STATE", response.data);
        return response;
      } catch (error) {
        throw new Error(error.response.data.error);
      }
    },
    async addSkill({ commit }, payload) {
      try {
        const response = await this.$axios.post("/skills", payload);
        commit("ADD_NEW_SKILL", response.data);
      } catch (error) {
        throw new Error(error.response.data.message);
      }
    },
    async removeSkill({ commit }, skillId) {
      try {
        const response = await this.$axios.delete(`/skills/${skillId}`);

        commit("REMOVE_SKILL", skillId);

        return response;
      } catch (error) {
        throw new Error(error.response.data.message);
      }
    }
  }
};
