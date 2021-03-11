import React, { useCallback, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'reactstrap';

import { Error } from './utils/ErrorComponent';
import { Loading } from './utils/LoadingComponent';
import { useHistory } from 'react-router-dom';
import { searchCountriesByName, fetchCountriesByRegion, fetchCountries } from '../redux/ActionCreators';

const RenderCountry = ({country, id}) => {
    const history = useHistory();
    const handleOnClick = useCallback(
        (key) => {
            history.push(`/country/${key}`)
        },
        [history],
    )
    

    return (
        <div className="country-card"  onClick={() => handleOnClick(country.alpha3Code)}>
            <div className="country-card-header">
                <img src={`${country.flag}`} alt={country.name}></img>
            </div>
            <div className="country-card-body">
                <p>{country.name}</p>
                <p><span>Population: </span>{country.population}</p>
                <p><span>Region: </span>{country.region}</p>
                <p><span>Capital: </span>{country.capital}</p>
            </div>

        </div>
    )
}

const RenderCountries = ({countries}) => {

    const page_count = 8;
    const current_page = 1;
    const start_index = (current_page - 1) * page_count;

    const countriy_list = countries.slice(start_index, page_count).map((element, key) => {
        return (
            <RenderCountry country={element} key={start_index + key} id={start_index + key}  />
        )
    });

    return (
        <div className="countries-section" >
            {countriy_list}
        </div>
    )
}

const Home = () => {
    const dispatch = useDispatch();
    const countries = useSelector(state => state.countries);
    const [dropboxVisible, setDropboxVisible] = useState(false);
    const history = useHistory();

    useEffect(() => {
        dispatch(fetchCountries());
      }, [dispatch]);

    const onSubmit = (event) => {
        event.preventDefault();
        var name = document.querySelector("#search-country-input").value;
        dispatch(searchCountriesByName(name));
    }

    const selectedRegion = (region) => {
        console.log(region);
        dispatch(fetchCountriesByRegion(region));
        setDropboxVisible(false);
    }

    const toggleDropbox = () => {
        setDropboxVisible(!dropboxVisible);
        console.log('toggle dropbox '+ dropboxVisible);
        document.querySelector('.filter-dropbox').classList.toggle('show');
    }

    const CountyListItem = ({value}) => (
        <li onClick={() => selectedRegion(value)} ><button>{value}</button></li>
    )

    const FilterDropList = () => {
        let regionList = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
        const list = regionList.map((value, index) => (
            <CountyListItem key={index} value={value} />
        ))
        return (
            <ul>
            {list}
            </ul>
        )
    }

    if (countries.is_loading ) {
        return(<Loading />)
    } else if (countries.error) {
        return (
            <React.Fragment>
                <Error message={countries.error} />
                <div style={{ display: 'flex', placeContent: 'center' }}>
                    <Button onClick={() => history.push('/')} style={{ width: '100px'}} >Go Home</Button>
                </div>

            </React.Fragment>
        )
    } else {
        return(
            <React.Fragment>
                <div className="search-bar">
                    <div className="search-input">
                        <i className="fa fa-search"></i>
                        <form onSubmit={onSubmit}>
                            <input type="text" id="search-country-input" placeholder="Search for a country..."/>
                        </form>
                    </div>
                    <div className="filter-region">
                        <div className="filter-box">
                            <p className="filter-content">{countries.region}</p>
                            <i className={`fa ${dropboxVisible? "fa-chevron-down": "fa-chevron-up"}`} onClick={() => toggleDropbox()}></i>
                        </div>
                        <div className={`filter-dropbox ${dropboxVisible? "show": ""}`}>
                                <FilterDropList />
                        </div>
                    </div>
                </div>
                <RenderCountries countries={countries.countries} />
            </React.Fragment>
        );
    }
   
  }

export default Home; 