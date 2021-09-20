class Time {
    constructor(zone) {
        this.zone = zone;
        this.render();
    }

    convert(date, tzString) {
        return new Date(
            (typeof date === "string" ? new Date(date) : date).toLocaleString(
                "en-US",
                { timeZone: tzString }
            )
        );
    }

    render() {
        this.date = this.convert(new Date(), this.zone);
        mp.world.time.set(this.date.getHours(), this.date.getMinutes(), 0);
        setInterval(() => {
            this.date = this.convert(new Date(), this.zone);
            mp.world.time.set(this.date.getHours(), this.date.getMinutes(), 0);
        }, 60000);
    }
}

const time = new Time("America/Los_Angeles");
