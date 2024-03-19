#include <bits/stdc++.h>
using namespace std;
#define MAX 50
int nosr1 = 0;
int nosr2 = 0;
int p = 0;
int q = 0;

class TRAIN {
    public:
    int trainno, nos1, nos2, d, m, y, fare1, fare2;
    char tname[20], bpt[20], dpt[20];
};

void traindata() {
    std::cout << "Enter train N0.";
    std::cin >> T.trainno;
    std::cout << "Enter train name";
    std::cin >> T.tname;
    std::cout << "Enter boarding point";
    std::cin >> T.bpt;
    std::cout << "Enter destination point";
    std::cin >> T.dpt;
    std::cout << "Enter Date of travelling";
    std::cin >> T.d >> T.m >> T.y;
    std::cout << "Enter number of seats in class 1";
    std::cin >> T.nos1;
    std::cout << "Enter number of seats in class 2";
    std::cin >> T.nos2;
    std::cout << "Enter fare of class 1";
    std::cin >> T.fare1;
    std::cout << "Enter fare of class 2";
    std::cin >> T.fare2;
}

void displaytrain() {
    std::cout << "Train N0." << T.trainno << "\n";
    std::cout << "Train name." << T.tname << "\n";
    std::cout << "Boarding point." << T.bpt << "\n";
    std::cout << "Destination point." << T.dpt << "\n";
    std::cout << "Date of travelling " << T.d << "/" << T.m << "/" << T.y << "\n";
    std::cout << "Number of seats in class 1." << T.nos1 << "\n";
    std::cout << "Number of seats in class 2." << T.nos2 << "\n";
    std::cout << "Fare of class 1" << T.fare1 << "\n";
    std::cout << "Fare of class 2" << T.fare2;
}

class reserve {
public:
    int pnrno, age;
    char psname[20];
};

void pnr1(int nsr1) {
    static int i;
    for (i = 0; i < nsr1; i++)
        r1[i].pnrno = 2 * (i + 1);
}

void pnr2(int nsr2) {
    static int i;
    for (i = 0; i < nsr2; i++)
        r2[i].pnrno = 2 * i + 1;
}

void rupdate() {
    T.nos1 -= nosr1;
    T.nos2 -= nosr2;
}

void reservation() {
    int i, category, Tno, d, m, y;
    char cl[20];
    int ch;
    int amount;

    do {
        std::cout << "Enter train no";
        std::cin >> Tno;
        if (Tno == T.trainno) {
            std::cout << "enter class";
            std::cin >> cl;

            if ((strcmp(cl, "class1") == 0) && (nosr1 <= T.nos1)) {
                std::cout << "Enter number of seats required";
                std::cin >> nosr1;

                for (i = 0; i < nosr1; i++) {
                    std::cout << "Enter passenger name";
                    std::cin >> r1[i].psname;
                    std::cout << "Enter age";
                    std::cin >> r1[i].age;
                }

                amount = T.fare1 * nosr1;
            }

            if (nosr1 > T.nos1)
                std::cout << "seats not available in class 1";

            pnr1(nosr1);
        } else if ((strcmp(cl, "class2") == 0) && (nosr2 <= T.nos2)) {
            std::cout << "Enter number of seats required";
            std::cin >> nosr2;

            for (i = 0; i < nosr2; i++) {
                std::cout << "Enter passenger name";
                std::cin >> r2[i].psname;
                std::cout << "Enter age";
                std::cin >> r2[i].age;
            }

            amount = T.fare2 * nosr2;
        }

        if (nosr2 > T.nos2)
            std::cout << "seats not available in class 2";

        pnr2(nosr2);

        std::cout << "enter date of travel";
        std::cin >> d >> m >> y;

        std::cout << "The available categories for concession are:\n";
        std::cout << "1. Military\n";
        std::cout << "2. Senior citizens\n";
        std::cout << "3. Children below 5 years\n";
        std::cout << "4. None\n";
        std::cout << "Please enter choice:";
        std::cin >> category;

        switch (category) {
            case 1:
                amount = amount - amount * 0.01;
                break;
            case 2:
                amount = amount - amount * 0.05;
                break;
            case 3:
                amount = amount - amount * 0.5;
                break;
            case 4:
                std::cout << "no concession";
                break;
        }

        std::cout << "total amount " << amount;
        rupdate();

        std::cout << "want to reserve more seats(1/0)";
        std::cin >> ch;
    } while (ch == 1);
}

void cancellation() {
    int clas;
    std::cout << "enter class(1/2)";
    std::cin >> clas;

    if (clas == 1) {
        std::cout << "Enter pnrno";
        std::cin >> p;

        if (p % 2 == 0)
            std::cout << "cancellation done";
        else
            std::cout << "incorrect pnrno";
    } else if (clas == 2) {
        std::cout << "enter pnrno";
        std::cin >> q;

        if (q % 2 != 0)
            std::cout << "cancellation done";
        else
            std::cout << "incorrect pnrno";
    }
}

void viewcancellation1() {
    std::cout << "Name of the passenger:" << r1[p / 2 - 1].psname << "\n";
    std::cout << "Age:" << r1[p / 2 - 1].age << "\n";
}

void viewcancellation2() {
    std::cout << "Name of the passenger:" << r2[(q - 1) / 2].psname << "\n";
    std::cout << "Age:" << r2[(q - 1) / 2].age << "\n";
}

void viewreserve1() {
    int i;
    for (i = 0; i < nosr1; i++) {
        std::cout << "pnrno:" << r1[i].pnrno << "\n";
        std::cout << "Name:" << r1[i].psname << "\n";
        std::cout << "Age:" << r1[i].age << "\n";
    }

    std::cout << "Date of Travel" << T.d << "/" << T.m << "/" << T.y << "\n";
}

void viewreserve2() {
    int i;
    for (i = 0; i < nosr2; i++) {
        std::cout << "pnrno:" << r2[i].pnrno << "\n";
        std::cout << "Name:" << r2[i].psname << "\n";
        std::cout << "Age:" << r2[i].age << "\n";
    }

    std::cout << "Date of Travel" << T.d << "/" << T.m << "/" << T.y << "\n";
}

int main() {
    int ch;
    reserve r1[MAX], r2[MAX];
    Train T;
    

    do {
        std::cout << "WELCOME TO RAILWAY RESERVATION SYSTEM\n\nthe menu is as follows:\n\n1-adding train details\n2-view available trains\n3-ticket reservation\n4-display information\n5-ticket cancellation\n6-back to menu\n";
        std::cout << "enter choice";
        std::cin >> ch;

        switch (ch) {
            case 1:
                traindata();
                break;
            case 2:
                displaytrain();
                break;
            case 3:
                reservation();
                break;
            case 4:
                viewreserve();
                break;
            case 5:
                cancellation();
                break;
            case 6:
                viewcancellation();
                break;
            default:
                std::cout << "invalid choice";
        }
    } while (ch <= 6);

    return 0;
}
