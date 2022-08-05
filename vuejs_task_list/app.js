Vue.createApp({
    data() {
        return {
            title: 'Task list',
            placeholderString: 'Enter the task...',
            inputValue: '',
            notes: []
        }
    },
    methods: {
        addNewNote() {
            if (this.inputValue !== '') {
                this.notes.push(this.inputValue) 
                this.inputValue = '' 
            }
        },
        toUpperCase(item) {
            return item.toUpperCase()
        },
        deleteNote(index) {
            this.notes.splice(index, 1)
        }
    },
    computed: {
        doubleCountCoputed() {
            return this.notes.length * 2
        }
    },
    watch: {
        inputValue(value) { /* Создаем метод, название которого - переменная, 
        за которой хотим следить */
            if (value.length > 10) { 
                this.inputValue = ''
            }
        }
    }
}).mount('#app')
