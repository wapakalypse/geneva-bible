
export default {
    actions: {
        async fetchPosts(ctx) {
            const res = await fetch('/bible.json')

            const posts = await res.json();

            ctx.commit('updatePosts', posts)
        }
    },
    mutations: {
        updatePosts(state, posts) {
            state.posts = posts
        }
    },
    state: {
        posts: []
    },
    getters: {
        allPosts(state) {
            return state.posts
        }
    }
}
