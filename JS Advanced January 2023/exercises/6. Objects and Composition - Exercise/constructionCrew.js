function constructionCrew(worker) {
    
    const requiredAmountWater = 0.1;

    if (worker.dizziness === true) {
        worker.levelOfHydrated += worker.weight * requiredAmountWater * worker.experience;
        worker.dizziness = false;
    }
    return worker;

}