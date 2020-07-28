new Vue({
    el: 'main',
    data: {
        anio: new Date().getFullYear(),
        newTask: {
            title: "",
            description: "",
            completed: false,
        },
        showCompleted: false,
        tasks: []
    },
    methods: {
        addNewTask() {
            let { tasks, newTask } = this; 
            let { title, description, completed } = newTask;
            if(title === '' || description === '') {
                alert('You need to specify a title and a description for the new task');  
                return;
            } else {
                tasks.push({
                    title,
                    description,
                    completed
                });
            }
        },
        deleteTask(task) {
            if(task.completed) return;
            if(confirm("Complete task?")) {
                task.completed = true;
            }
        }
    },
    computed: {
        getTasks() {
            return this.tasks.filter(task => task.completed === this.showCompleted);
        },
        getTasksCompleted() {
            return this.tasks.filter(task => task.completed);
        }
    }
})