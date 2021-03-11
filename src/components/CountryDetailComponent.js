import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { fetchCountryByCode } from "../redux/ActionCreators";
import { Error } from './utils/ErrorComponent';
import { Loading } from './utils/LoadingComponent';
import { Button } from 'reactstrap';
import { BASE_URL } from './basic';
import { numberWithCommas} from './utils/StringUtils';

const CountryDetail = () => {
    const country = useSelector(state => state.country);
    let {country_id} = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCountryByCode(country_id));

    }, [dispatch, country_id])

    const history = useHistory();


    const goBack = () => {
        history.goBack();
    }

    const BorderList = ({items}) => {
        if (!items) {
            return (<React.Fragment></React.Fragment>)
        }

        return (
            <span>
                {items.map((element, key) => {
                   return (<span key={key} className="border-country">{element.name}</span>)
                })}
            </span>
        )
    }

    if (country.is_loading ) {
        return(<Loading />)
    } else if (country.error) {
        return (
            <React.Fragment>
            <Error message={country.error} />
            <div style={{ display: 'flex', placeContent: 'center' }}>
                <Button onClick={() => history.push(`${BASE_URL}`)} style={{ width: '100px'}} >Go Home</Button>
            </div>

        </React.Fragment>

        )
    } else {
        const select_country = country.country;
    return (
        <div>
            <div className="detail-header">
                <button onClick={() => goBack()}>
                    <i className="fa fa-long-arrow-left"><span>Back</span></i>
                </button>
            </div>
            <div className="detail-section">
                <div className="country-flag">
                    <img src={select_country.flag} alt={select_country.name}></img>
                </div>
                <div className="country-details">
                    <p className="country-name">{select_country.name}</p>
                    <p><span>Native Name: </span>{select_country.nativeName}</p>
                    <p><span>Top Level Domain: </span>{select_country.topLevelDomain.join('')}</p>
                    <p><span>Population: </span>{numberWithCommas(select_country.population)}</p>
                    <p><span>Currencies: </span>{select_country.currencies[0].name}</p>
                    <p><span>Region: </span>{select_country.region}</p>
                    <p><span>Languages: </span>{select_country.languages[0].name}</p>
                    <p><span>Sub Region: </span>{select_country.subregion}</p>
                    <p><span>Capital: </span>{select_country.capital}</p>
                    <p><span>Border Countries: </span><BorderList items={select_country.borderList}/></p>
                </div>
            </div>
        </div>
    )
    }
}

export default CountryDetail;