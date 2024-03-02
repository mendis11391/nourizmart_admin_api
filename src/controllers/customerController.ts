import { Request, Response } from "express";
import dotenv from "dotenv";
import path from "path";
import CustomerService from "../services/customerService";
import { AuthenticatedRequest } from "../interface/authenticationRequestInterface";

const customerService = new CustomerService();

export const checkIfCustomerExists = async (
  req: AuthenticatedRequest,
  res: Response
): Promise<void> => {
  try {
    const customerCheck = await customerService.checkIfCustomerExists(
      req.params.firebaseId
    );
    if (customerCheck[0].customerExist === 0) {
      res.json({ exists: false });
    } else {
      res.json({ exists: true });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const fetchCustomerData = async (
  req: AuthenticatedRequest,
  res: Response
): Promise<void> => {
  try {
    const userInfo = await customerService.getCustomerInfo(
      req.params.firebaseId
    );
    res.json(userInfo);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const createNewCustomer = async (
  req: AuthenticatedRequest,
  res: Response
): Promise<void> => {
  try {
    const userInfo = await customerService.createNewCustomer(req.body);
    if (userInfo.serverStatus === 2) {
      res.json({ status: 1, message: "Customer added successfully" });
    } else {
      res.json({ status: 0, message: "Something went wrong" });
    }
  } catch (error) {
    res.status(500).json({ error: `Internal Server Error: ${error}` });
  }
};

export const getDeliveryOption = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    // Hardcoded delivery option data
    const deliveryOption = {
      success: true,
      message: "Select option for instat deliver or next day delivery",
      data: {
        promotions: [
          {
            image_url: "https://scontent.fblr1-6.fna.fbcdn.net/v/t39.30808-6/303510680_487254480079549_4133931268015615273_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=B6rA_iOxvPEAX9XUOnm&_nc_ht=scontent.fblr1-6.fna&oh=00_AfDc16_DioPQldOFijRMCVoMV-NIS-yFYSkEjq-LhtXDXw&oe=65E2FF95",
            id: 1,
            type: "Instant",
          },
          {
            image_url: "https://scontent.fblr1-6.fna.fbcdn.net/v/t39.30808-6/303510680_487254480079549_4133931268015615273_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=B6rA_iOxvPEAX9XUOnm&_nc_ht=scontent.fblr1-6.fna&oh=00_AfDc16_DioPQldOFijRMCVoMV-NIS-yFYSkEjq-LhtXDXw&oe=65E2FF95",
            id: 2,
            type: "NextDayDelivery",
          },
        ],
        cart_count: 0,
        notification_count: 0,
      },
    };
    // Respond with the delivery option JSON
    res.json(deliveryOption);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

/*
firebaseId: string,
first_name: string,
last_name: string,
mobile: string,
email: string,
house_no: string,
street: string,
area: string,
district: string,
state: string,
pincodeId: number,
landmark: string,
is_active: string = "Y",
createdBy: String = "User"
*/
