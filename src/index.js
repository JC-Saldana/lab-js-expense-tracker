// Entry
class Entry {
    constructor(date, amount, description) {
        this.date = date
        this.amount = amount
        this.description = description
    }

    getFormattedAmount() {
        return `${this.amount} €`
    }
}

// Income
class Income extends Entry {
    constructor(date, amount, description) {
        super(date, amount, description)
        this.type = "income"
    }
}

// Expense
class Expense extends Entry {
    constructor(date, amount, description, paid) {
        super(date, amount, description)
        this.paid = paid
        this.type = "expense"
    }
    getFormattedAmount() {
        return `-${this.amount} €`
    }
}

// Budget
class Budget {

    constructor() {
        this.entries = []
    }

    addEntry(newEntry) {
        this.entries.push(newEntry)
    }

    getCurrentBalance() {
        if (this.entries.length === 0) return 0
        let income = 0
        let expenses = 0
        this.entries.forEach(entry => {
            if (entry.type === "income") {
                income += entry.amount
            } else if (entry.type === "expense") {
                expenses += Math.abs(entry.amount)
            }
        });
        return income - expenses
    }

    getFormattedEntries() {
        const updatedEntries = []
        this.entries.forEach(entry => {
            if (entry.type === "income") {
                updatedEntries.push(`${entry.date} | ${entry.description} | ${entry.amount} €`)
            } else if (entry.type = "expense") {
                updatedEntries.push(`${entry.date} | ${entry.description} | -${entry.amount} €`)
            }
        });
        return updatedEntries
    }

}
