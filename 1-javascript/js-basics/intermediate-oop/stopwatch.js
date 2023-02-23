function StopWatch1() {
    let startTime = 0
    let endTime = 0
    let running = false
    let duration = 0   

    this.start = function() {
        if(running)
            throw new Error('Stopwatch has already been started');

        running = true;

        startTime = new Date();
    };

    this.stop = function() {
        if(!running)
            throw new Error('Stopwatch is not started');

        running = false;

        endTime = new Date();
        duration += (endDate - startDate) / 1000;
    };

    this.reset = function() {
        startTime = 0
        endTime = 0
        running = false
        duration = 0
    };

    Object.defineProperty(this, 'duration', {
        get: function() {
            return duration;
        }
    });
}
