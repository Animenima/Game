$(document).ready(function(){
    var defaultstate = {
        dirt: 0,
        stone: 0,
        iron: 0,
        silver: 0,
        gold: 0,
        diamond: 0,
        dirtPlus: 1,
        stonePlus: 0,
        ironPlus: 0,
        silverPlus: 0,
        goldPlus: 0,
        diamondPlus: 0,
        autodirtPlus: 0,
        autostonePlus: 0,
        autoironPlus: 0,
        autosilverPlus: 0,
        autogoldPlus: 0,
        autodiamondPlus: 0,
        autodirtPrice: 10,
        autostonePrice: 10,
        autoironPrice: 10,
        autosilverPrice: 10,
        autogoldPrice: 10,
        autodiamondPrice: 10,
        dirtUPrice: 100,
        stoneUPrice: 100,
        ironUPrice: 100,
        silverUPrice: 100,
        goldUPrice: 100,
        diamondUPrice: 100,
        dirtU2Price: 1000,
        stoneU2Price: 1000,
        ironU2Price: 1000,
        silverU2Price: 1000,
        goldU2Price: 1000,
        diamondU2Price: 1000,
        diamondU2RPrice: 2000,
    
    
    };
    
    
    
    var state = {
        dirt: 0,
        stone: 0,
        iron: 0,
        silver: 0,
        gold: 0,
        diamond: 0,
        dirtPlus: 1,
        stonePlus: 0,
        ironPlus: 0,
        silverPlus: 0,
        goldPlus: 0,
        diamondPlus: 0,
        autodirtPlus: 0,
        autostonePlus: 0,
        autoironPlus: 0,
        autosilverPlus: 0,
        autogoldPlus: 0,
        autodiamondPlus: 0,
        autodirtPrice: 10,
        autostonePrice: 10,
        autoironPrice: 10,
        autosilverPrice: 10,
        autogoldPrice: 10,
        autodiamondPrice: 10,
        dirtUPrice: 100,
        stoneUPrice: 100,
        ironUPrice: 100,
        silverUPrice: 100,
        goldUPrice: 100,
        diamondUPrice: 100,
        dirtU2Price: 1000,
        stoneU2Price: 1000,
        ironU2Price: 1000,
        silverU2Price: 1000,
        goldU2Price: 1000,
        diamondU2Price: 1000,
        diamondU2RPrice: 2000,
    
    
    };

    var savegame = JSON.parse(localStorage.getItem("gameData"));

    $("#save").click(function(){
        localStorage.setItem("gameData", JSON.stringify(state))
    });

    $("#load").click(function(){
            state = savegame
    });
    
    setInterval(function(){
        state.dirt += state.autodirtPlus * state.dirtPlus;
        changeInventory();
        changeUpgrade();
    }, 1000);
    
    setInterval(function(){
        state.stone += state.autostonePlus * state.stonePlus;
        changeInventory();
        changeUpgrade();
    }, 1000);
    
    setInterval(function(){
        state.iron += state.autoironPlus * state.ironPlus;
        changeInventory();
        changeUpgrade();
    }, 1000);
    
    setInterval(function(){
        state.silver += state.autosilverPlus * state.silverPlus;
        changeInventory();
        changeUpgrade();
    }, 1000);
    
    setInterval(function(){
        state.gold += state.autogoldPlus * state.goldPlus;
        changeInventory();
        changeUpgrade();
    }, 1000);
    
    setInterval(function(){
        state.diamond += state.autodiamondPlus * state.diamondPlus;
        changeInventory();
        changeUpgrade();
    }, 1000);
    
    $("#dirt").click(function(){
        state.dirt += state.dirtPlus;
        changeInventory();
        changeUpgrade();
    });
    
    $("#stone").click(function(){
        state.stone += state.stonePlus;
        changeInventory();
        changeUpgrade();
    });
    
    $("#iron").click(function(){
        state.iron += state.ironPlus;
        changeInventory();
        changeUpgrade();
    });
    
    $("#silver").click(function(){
        state.silver += state.silverPlus;
        changeInventory();
        changeUpgrade();
    });
    
    $("#gold").click(function(){
        state.gold += state.goldPlus;
        changeInventory();
        changeUpgrade();
    });
    
    $("#diamond").click(function(){
        state.diamond += state.diamondPlus;
        changeInventory();
        changeUpgrade();
    });
    
    $("#dirtauto").click(function(){
        if (state.dirt >= state.autodirtPrice){
            state.dirt -= state.autodirtPrice;
            state.autodirtPlus ++;
            state.autodirtPrice *= 2;
            changeInventory();
            changeUpgrade();}
        else{
            alert("Not enough dirt")
            changeInventory();
            changeUpgrade();
        }
    });
    
    $("#stoneauto").click(function(){
        if (state.stone >= state.autostonePrice){
            state.stone -= state.autostonePrice;
            state.autostonePlus++;
            state.autostonePrice *= 2;
            changeInventory();
            changeUpgrade();}
        else{
            alert("Not enough stone")
            changeInventory();
            changeUpgrade();
        }
    });
    
    $("#ironauto").click(function(){
        if (state.iron >= state.autoironPrice){
            state.iron -= state.autoironPrice;
            state.autoironPlus++;
            state.autoironPrice *= 2;
            changeInventory();
            changeUpgrade();}
        else{
            alert("Not enough iron")
            changeInventory();
            changeUpgrade();
        }
    });
    
    $("#silverauto").click(function(){
        if (state.silver >= state.autosilverPrice){
            state.silver -= state.autosilverPrice;
            state.autosilverPlus++;
            state.autosilverPrice *= 2;
            changeInventory();
            changeUpgrade();}
        else{
            alert("Not enough silver")
            changeInventory();
            changeUpgrade();
        }
    });
    
    $("#goldauto").click(function(){
        if (state.gold >= state.autogoldPrice){
            state.gold -= state.autogoldPrice;
            state.autogoldPlus++;
            state.autogoldPrice *= 2;
            changeInventory();
            changeUpgrade();}
        else{
            alert("Not enough gold")
            changeInventory();
            changeUpgrade();
        }
    });
    
    $("#diamondauto").click(function(){
        if (state.diamond >= state.autodiamondPrice){
            state.diamond -= state.autodiamondPrice;
            state.autodiamondPlus++;
            state.autodiamondPrice *= 2;
            changeInventory();
            changeUpgrade();}
        else{
            alert("Not enough diamonds")
            changeInventory();
            changeUpgrade();
        }
    });
    
    $("#dirt1").click(function(){
        if (state.dirt >= state.dirtUPrice){
            state.dirt -= state.dirtUPrice;
            state.dirtPlus++;
            state.dirtUPrice *= 2;
            changeInventory();
            changeUpgrade();}
        else{
            alert("Not enough dirt")
            changeInventory();
            changeUpgrade();
        }
    });
    
    $("#stone1").click(function(){
        if (state.stone >= state.stoneUPrice){
            state.stone -= state.stoneUPrice;
            state.stonePlus++;
            state.stoneUPrice *= 2;
            changeInventory();
            changeUpgrade();}
        else{
            alert("Not enough stone")
            changeInventory();
            changeUpgrade();
        }
    });
    
    $("#iron1").click(function(){
        if (state.iron >= state.ironUPrice){
            state.iron -= state.ironUPrice;
            state.ironPlus++;
            state.ironUPrice *= 2;
            changeInventory();
            changeUpgrade();}
        else{
            alert("Not enough iron")
            changeInventory();
            changeUpgrade();
        }
    });
    
    $("#silver1").click(function(){
        if (state.silver >= state.silverUPrice){
            state.silver -= state.silverUPrice;
            state.silverPlus++;
            state.silverUPrice *= 2;
            changeInventory();
            changeUpgrade();}
        else{
            alert("Not enough silver")
            changeInventory();
            changeUpgrade();
        }
    });
    
    $("#gold1").click(function(){
        if (state.gold >= state.goldUPrice){
            state.gold -= state.goldUPrice;
            state.goldPlus++;
            state.goldUPrice *= 2;
            changeInventory();
            changeUpgrade();}
        else{
            alert("Not enough gold")
            changeInventory();
            changeUpgrade();
        }
    });
    
    $("#diamond1").click(function(){
        if (state.diamond >= state.diamondUPrice){
            state.diamond -= state.diamondUPrice;
            state.diamondPlus++;
            state.diamondUPrice *= 2;
            changeInventory();
            changeUpgrade();}
        else{
            alert("Not enough diamonds")
            changeInventory();
            changeUpgrade();
        }
    });
    
    $("#dirt2").click(function(){
        state.dirt -= state.dirtU2Price;
        state.stonePlus++;
        $("#dirt2").addClass("d-none");
        changeInventory();
        changeUpgrade();
    });
    
    $("#stone2").click(function(){
        state.stone -= state.stoneU2Price;
        state.ironPlus++;
        $("button").remove("#stone2");
        changeInventory();
        changeUpgrade();
    });
    
    $("#iron2").click(function(){
        state.iron -= state.ironU2Price;
        state.silverPlus++;
        $("button").remove("#iron2");
        changeInventory();
        changeUpgrade();
    });
    
    $("#silver2").click(function(){
        state.silver -= state.silverU2Price;
        state.goldPlus++;
        $("button").remove("#silver2");
        changeInventory();
        changeUpgrade();
    });
    
    $("#gold2").click(function(){
        state.gold -= state.goldU2Price;
        state.diamondPlus++;
        $("button").remove("#gold2");
        changeInventory();
        changeUpgrade();
    });
    
    $("#diamond2").click(function(){
        if (state.diamond >= state.diamondU2Price){
    //Increases all production by 2
        defaultstate.dirtPlus += 1;
        defaultstate.stonePlus += 2;
        defaultstate.ironPlus += 2;
        defaultstate.silverPlus += 2;
        defaultstate.goldPlus += 2;
        defaultstate.diamondPlus += 2;
    //Resets all resources    
        state = defaultstate;
        changeInventory();
        changeUpgrade();
        }
        else {
            alert("Not enough diamonds")
            changeInventory();
            changeUpgrade();
        }
    });

    $("#diamond2r").click(function(){
        if (state.diamond >= state.diamondU2RPrice){
    //Increases all production by 2 after first reset        
            defaultstate.dirtPlus *= 2;
            defaultstate.stonePlus *= 2;
            defaultstate.ironPlus *= 2;
            defaultstate.silverPlus *= 2;
            defaultstate.goldPlus *= 2;
            defaultstate.diamondPlus *= 2;
            defaultstate.diamondU2RPrice *= 2;
    //Resets all resources after first reset
            state = defaultstate;
            changeInventory();
            changeUpgrade();
        }   
        else {    
            alert("Not enough diamonds")
            changeInventory();
            changeUpgrade();
        }
    });
    
    function changeInventory(){
        $("#dirtc").html("Dirt: " + state.dirt);
        $("#stonec").html("Stone: " + state.stone);
        $("#ironc").html("Iron: " + state.iron);
        $("#silverc").html("Silver: " + state.silver);
        $("#goldc").html("Gold: " + state.gold);
        $("#diamondc").html("Diamond: " + state.diamond);
    
        $("#dirtautoc").html("Dirt Per Second: " + state.autodirtPlus * state.dirtPlus);
        $("#stoneautoc").html("Stone Per Second: " + state.autostonePlus * state.stonePlus);
        $("#ironautoc").html("Iron Per Second: " + state.autoironPlus * state.ironPlus);
        $("#silverautoc").html("Silver Per Second: " + state.autosilverPlus * state.silverPlus);
        $("#goldautoc").html("Gold Per Second: " + state.autogoldPlus * state.goldPlus);
        $("#diamondautoc").html("Diamond Per Second: " + state.autodiamondPlus * state.diamondPlus);
    };
    
    function changeUpgrade(){
        if(state.dirt >= state.autodirtPrice){
            $("#dirtauto").removeClass("invisible");   
        }else{
            $("#dirtauto").addClass("invisible");
        }
    
        if(state.stone >= state.autostonePrice){
            $("#stoneauto").removeClass("invisible");   
        }else{
            $("#stoneauto").addClass("invisible");
        }
    
        if(state.iron >= state.autoironPrice){
            $("#ironauto").removeClass("invisible");   
        }else{
            $("#ironauto").addClass("invisible");
        }
    
        if(state.silver >= state.autosilverPrice){
            $("#silverauto").removeClass("invisible");   
        }else{
            $("#silverauto").addClass("invisible");
        }
    
        if(state.gold >= state.autogoldPrice){
            $("#goldauto").removeClass("invisible");   
        }else{
            $("#goldauto").addClass("invisible");
        }
    
        if(state.diamond >= state.autodiamondPrice){
            $("#diamondauto").removeClass("invisible");   
        }else{
            $("#diamondauto").addClass("invisible");
        }
    
        if(state.dirt >= state.dirtUPrice){
            $("#dirt1").removeClass("invisible");   
        }else{
            $("#dirt1").addClass("invisible");
        }
    
        if(state.stone >= state.stoneUPrice){
            $("#stone1").removeClass("invisible");   
        }else{
            $("#stone1").addClass("invisible");
        }
    
        if(state.iron >= state.ironUPrice){
            $("#iron1").removeClass("invisible");   
        }else{
            $("#iron1").addClass("invisible");
        }
    
        if(state.silver >= state.silverUPrice){
            $("#silver1").removeClass("invisible");   
        }else{
            $("#silver1").addClass("invisible");
        }
    
        if(state.gold >= state.goldUPrice){
            $("#gold1").removeClass("invisible");   
        }else{
            $("#gold1").addClass("invisible");
        }
    
        if(state.diamond >= state.diamondUPrice){
            $("#diamond1").removeClass("invisible");   
        }else{
            $("#diamond1").addClass("invisible");
        }
    
        if(state.dirt >= state.dirtU2Price){
            $("#dirt2").removeClass("invisible");   
        }else{
            $("#dirt2").addClass("invisible");
        }
    
        if(state.stone >= state.stoneU2Price){
            $("#stone2").removeClass("invisible");   
        }else{
            $("#stone2").addClass("invisible");
        }
    
        if(state.iron >= state.ironU2Price){
            $("#iron2").removeClass("invisible");   
        }else{
            $("#iron2").addClass("invisible");
        }
    
        if(state.silver >= state.silverU2Price){
            $("#silver2").removeClass("invisible");   
        }else{
            $("#silver2").addClass("invisible");
        }
    
        if(state.gold >= state.goldU2Price){
            $("#gold2").removeClass("invisible");   
        }else{
            $("#gold2").addClass("invisible");
        }
    
        if(state.diamond >= state.diamondU2Price){
            $("#diamond2").removeClass("invisible");   
        }else{
            $("#diamond2").addClass("invisible");
        }

        if(state.diamond >= state.diamondU2RPrice){
            $("#diamond2").removeClass("d-none");   
        }else{
            $("#diamond2").addClass("invisible");
        }
        
    };
    
    });
