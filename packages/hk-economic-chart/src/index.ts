import * as d3 from "d3";

class HkBaseChart {

    chart_width = 500;
    chart_height = 300;

    bars_displayed = 40; last_bar_displayed = 0;

    randomOne(weight = 1) {
        return (Math.random() + Math.random() - 1) * weight;
    }

    generateData() {
        const length = Math.round(Math.random() * 90) + 10;

        // initial values I’m I   I I’m 
        const seed_close = Math.random() * 150 + 50;
        let previous_close = seed_close;
        let previous_volume = Math.random() * 300 + 10;
        let trend = Math.floor(Math.random() * 2) * 2 - 1;

        // calculate each bar
        return d3.range(length).map((item, i) => {
            const open = previous_close * (1 + this.randomOne(0.1));
            const close = open * (1 + this.randomOne(0.2) * trend);
            const high = Math.max(open, close) * (1 + this.randomOne(0.1));
            const low = Math.min(open, close) * (1 - this.randomOne(0.1));
            const volume = previous_volume * (1 + this.randomOne(0.5));

            previous_close = close;
            trend = Math.floor(Math.random() * 2) * 2 - 1;

            return {
                time: i,
                open,
                high,
                low,
                close,
                volume
            };
        });
    }

    render() {
        return d3.range(length).map((item, i) => {
            const open = previous_close * (1 + randomOne(0.1));
            const close = open * (1 + randomOne(0.2) * trend);
            const high = Math.max(open, close) * (1 + randomOne(0.1));
            const low = Math.min(open, close) * (1 - randomOne(0.1));
            const volume = previous_volume * (1 + randomOne(0.5));

            previous_close = close;
            trend = Math.floor(Math.random() * 2) * 2 - 1;

            return {
                time: i,
                open,
                high,
                low,
                close,
                volume
            };
        });
    }
}