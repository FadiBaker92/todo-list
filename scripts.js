



const todosApp = {
data () {
        return {
        todos : [],
        newTodo: {
            done : false,
        }
                }
        },
        methods : {
            addTodos : function () {
                if (this.newTodo.text){

                    this.todos.push(this.newTodo)
                    this.newTodo = {
                        done: false,
                    }
                } else {
                    alert('fill in the field')
                }
                
            }
        }
}

Vue.createApp(todosApp).mount('#app')