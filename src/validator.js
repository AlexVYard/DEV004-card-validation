const validator = {

    maskify(input) {
            /*
       return input.slice(0,-4).replace(/./g, "🐱") + input.slice(-4) ;
        
    }    */
        if (input.length <= 4) return input;
        const last4Characters = input.substr(-4);
        const maskingCharacters = input.substr(0, input.length - 5).replace(/\d/g, '🐱');
        return `${maskingCharacters}${last4Characters}`;
    }
    
}

export default validator;

