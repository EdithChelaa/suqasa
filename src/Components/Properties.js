import React, {useEffect, useState} from "react";
import "./properties.css";

function Properties(){
    const [searchQuery, setSearchQuery] = useState("");
    const [locations, setLocations]=useState([]);
    const [selectedLocation, setSelectedLocation]=useState("");
    const [properties, setProperties]=useState([]);
    const [selectedProperty, setSelectedProperty]=useState("");
    const [minPrice, setMinPrice] = useState("");
    const [maxPrice, setMaxPrice] = useState("");
    const [filteredProperties, setFilteredProperties] = useState([]);

    useEffect(()=>{
        const fetchLocations = async () => {
            try{
                const response = await fetch("http://localhost:8080/api/locations");
                const locations = await response.json();
                setLocations(locations);
            }catch(error){
                console.error('Error fetching locations', error);
            }
        };
        fetchLocations();
    }, []);

    const handleLocationChange = (event) => {
        const selectedLocation = event.target.value;
        setSelectedLocation(selectedLocation);
      };

    useEffect(()=>{
        const fetchProperties = async () => {
            try{
                const response = await fetch("http://localhost:8080/api/properties");
                const properties = await response.json();
                setProperties(properties);
                setSelectedProperty(properties);
            }catch(error){
                console.error('Error fetching Properties', error);
            }
        };
        fetchProperties();
    }, []);

    const handlePropertyChange = (event) => {
        const setSelectedProperty = event.target.value;
        setSelectedProperty(selectedProperty);
      };

    const handleSearch = () => {
    let filtered = properties;

    if (selectedLocation) {
      filtered = filtered.filter(
        (property) => property.location === selectedLocation
      );
    }

    if (selectedProperty) {
      filtered = filtered.filter(
        (property) => property.propertyType === selectedProperty
      );
    }

    if (minPrice !== "" && maxPrice !== "") {
      filtered = filtered.filter(
        (property) =>
          parseInt(property.price) >= parseInt(minPrice) &&
          parseInt(property.price) <= parseInt(maxPrice)
      );
    }

    setFilteredProperties(filtered);
  };
  
    return(
        <div>
            <div className="SearchBar">                    
                <input className="searchBarInput"
                placeholder="Search for property or location..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}/>
                <button className="searchBarButton" onClick={handleSearch}>Search</button>
            </div>
            <div className="FilterSearch">
                <div>
                    <div className="select">
                        <div className="locate"> 
                        <label className="specs">Location: </label>
                        
                            <select className="prolo" value={selectedLocation} onChange={handleLocationChange}>
                                <option className="lopro" value="">Select Location</option>
                                {locations.map((location, index) => (
                                    <option key={index} value={location}>
                                    {location}
                                    </option>
                                ))}
                            </select>
                            </div>
                        <div className="property">    
                        <label className="specs">Property Type: </label>                        
                            <select className="prolo" value={selectedProperty} onChange={handlePropertyChange}>
                                <option className="lopro" value="">Select Property Type</option>
                                {properties.map((property, index) => (
                                    <option key={index} value={property}>
                                    {property}
                                    </option>
                                ))}
                            </select>
                            </div>
                    </div>
                <div className="price"> 
                <input className="max"
                placeholder="Max. Price"
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
                />
                <input className="min"
                placeholder="Min. Price"
                value={minPrice}
                onChange={(e) => setMinPrice(e.target.value)}
                />
                </div>
                </div>
                <button className="searchbutton" onClick={handleSearch}>Search</button>
            </div>
            <div>
                <h1 className="katikati">Available Properties</h1>
                <ul>
                    {filteredProperties.map((property, index) => (
                        <li key={index}>{property.name}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Properties;