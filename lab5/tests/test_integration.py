import requests
import time

def test_api_health():
    url = "http://localhost:5000/api/health"
    max_retries = 15
    for _ in range(max_retries):
        try:
            response = requests.get(url)
            if response.status_code == 200:
                assert response.json()["status"] == "ok"
                return
        except requests.exceptions.ConnectionError:
            pass
        time.sleep(2)
    assert False, "Server did not start in time or returned invalid response"

def test_api_locations():
    url = "http://localhost:5000/api/v1/locations"
    max_retries = 15
    for _ in range(max_retries):
        try:
            response = requests.get(url)
            if response.status_code == 200:
                data = response.json()
                assert "1" in data
                assert data["1"] == "Главный цех"
                return
        except requests.exceptions.ConnectionError:
            pass
        time.sleep(2)
    assert False, "Server did not start in time or returned invalid response"
