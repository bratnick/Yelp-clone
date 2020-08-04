const apiKey = 'yiMvrpQ3_HFxUQhC1s70xFJYVhI5l-3-JnLpVO5geCeIeUTcT7vt0kl-jeu3KeYjlAT2qId1YENsFVD4zZA8ZuAAu_Ayp3t-m89yy7dDJqgpgpRu_ZFrqMEplXcmX3Yx';
const yelp = {
    search(term,location,sortBy){
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,{
            headers: {
                Authorization: `Bearer ${apiKey}`
            }
        }).then(res => {
            return res.json();
        })
        .then(jsonResponse => {
            if(jsonResponse.businesses){
                return jsonResponse.businesses.map(business => {
                    return {
                        id: business.id,
                        imageSrc: business.image_url,
                        name: business.name,
                        address: business.location.address1,
                        city: business.location.city, 
                        state: business.location.state,
                        zipCode: business.location.zip_code,
                        category: business.categories[0].title,
                        rating: business.rating,
                        reviewCount: business.review_count
                    }
                });
            }
        });
    }
};  
export default yelp;