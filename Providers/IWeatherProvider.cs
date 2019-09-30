using System.Collections.Generic;
using sldoomsday.Models;

namespace sldoomsday.Providers
{
    public interface IWeatherProvider
    {
        List<WeatherForecast> GetForecasts();
    }
}
