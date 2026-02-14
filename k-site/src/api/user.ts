import api from "./axios";
import type { AxiosError } from "axios";

const url = "/events";
const technovationUrl = `${url}/technovation/register`;
const paymentUrl = `${url}/payment`;

/* ================= TYPES ================= */

interface UserEventsResponse {
  message: string;
  registrations: any[];
  user: any;
}

interface SimpleMessageResponse {
  message: string;
}

interface TechnovationStatus {
  registered: boolean;
}

interface AccommodationResponse {
  registered: boolean;
  isPaid: boolean;
  payid: boolean;
}

/* ================= GET USER REGISTRATIONS ================= */

export const apiKUserEvents = async (): Promise<UserEventsResponse> => {
  try {
    const response = await api.get(`${url}`);
    const { message, registrations, user } = response.data;

    return { message, registrations, user };
  } catch (err) {
    const error = err as AxiosError<any>;
    if (error.response) throw error.response.data;
    throw err;
  }
};

/* ================= REGISTER TECHNOVATION ================= */

export const apiRegisterTechnovation = async (
  data: any
): Promise<SimpleMessageResponse> => {
  try {
    await api.post(`${technovationUrl}`, data);

    return {
      message: "Registered for technovation successfully!!",
    };
  } catch (err) {
    const error = err as AxiosError<any>;
    if (error.response) throw error.response.data;
    throw err;
  }
};

/* ================= GET TECHNOVATION STATUS ================= */

export const apiGetTechnovation = async (): Promise<TechnovationStatus> => {
  try {
    const response = await api.get(`${url}/technovation`);
    const { registered } = response.data;

    return { registered };
  } catch (err) {
    const error = err as AxiosError<any>;
    if (error.response) throw error.response.data;
    throw err;
  }
};

/* ================= REGISTER EVENT ================= */

export const apiRegisterEvents = async (
  eventCode: string,
  data: any
): Promise<SimpleMessageResponse> => {
  try {
    await api.post(`${url}/register/${eventCode}`, data);

    return {
      message: "Registered for event successfully!!",
    };
  } catch (err) {
    const error = err as AxiosError<any>;
    if (error.response) throw error.response.data;
    throw err;
  }
};

/* ================= REGISTER WORKSHOP ================= */

export const apiRegisterWorkshop = async (
  workshopCode: string,
  data: any
): Promise<SimpleMessageResponse> => {
  try {
    await api.post(`${url}/register/${workshopCode}`, data);

    return {
      message: "Registered for workshop successfully!!",
    };
  } catch (err) {
    const error = err as AxiosError<any>;
    if (error.response) throw error.response.data;
    throw err;
  }
};

/* ================= SUBMIT REFERENCE ID ================= */

export const apiPutReferenceID = async (
  code: string,
  data: any
): Promise<SimpleMessageResponse> => {
  try {
    const response = await api.put(`${paymentUrl}/${code}`, data);

    return {
      message: response.data.message,
    };
  } catch (err) {
    const error = err as AxiosError<any>;
    if (error.response) throw error.response.data;
    throw err;
  }
};

/* ================= REGISTER ACCOMMODATION ================= */

export const apiRegisterAccommodation = async (
  data: any
): Promise<SimpleMessageResponse> => {
  try {
    const response = await api.post(`${url}/accomodation/register`, data);

    return {
      message: response.data.message,
    };
  } catch (err) {
    const error = err as AxiosError<any>;
    if (error.response) throw error.response.data;
    throw err;
  }
};

/* ================= GET ACCOMMODATION ================= */

export const apiGetAccommodation = async (): Promise<AccommodationResponse> => {
  try {
    const response = await api.get(`${url}/accomodation`);
    const { registered, registrations } = response.data;

    return {
      registered,
      isPaid: registrations?.isPaid ?? false,
      payid: Boolean(registrations?.payid),
    };
  } catch (err) {
    const error = err as AxiosError<any>;
    if (error.response) throw error.response.data;
    throw err;
  }
};
